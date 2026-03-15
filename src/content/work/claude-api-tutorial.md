---
title: "Getting Started with the Claude API"
description: "A developer tutorial walking through your first Claude API integration — from installation to a working Python app that summarizes documents."
tags: ["Developer Education", "API Documentation", "Tutorial"]
metric: "0 → working app"
metricLabel: "in one tutorial"
problem: "Developers evaluating Claude need to go from 'I know it exists' to 'I'm building something real with it' — quickly. But example code is often scattered, context-free, or stops at Hello World without showing how to handle the response, manage credentials, or structure a real function."
approach: "Single-path tutorial with clear milestones: install the SDK, authenticate, make a first API call that actually runs, then extend it into a reusable document summarizer. Python throughout. Each step produces visible output before moving on. Common failure points (auth errors, missing env vars, rate limits) addressed at the exact moment they're most likely to occur."
outcome: "A developer who follows the guide ends with a working Python application — not just a Hello World — and understands the messages API well enough to extend it for their own use case. The tutorial has been tested against a fresh Python environment to ensure every step produces the expected output."
---

This tutorial walks you through your first Claude API integration from start to finish. By the end, you'll have a working Python application that summarizes documents — and you'll understand the API well enough to adapt it for your own projects.

**Time to complete:** 20–30 minutes
**Prerequisites:** Python 3.8+, a terminal, an [Anthropic account](https://console.anthropic.com)

---

## Step 1: Install the SDK

The Anthropic Python SDK handles authentication, request formatting, and response parsing. Install it with pip:

```bash
pip install anthropic
```

Verify the installation:

```bash
python -c "import anthropic; print(anthropic.__version__)"
```

You should see a version number printed (e.g., `0.40.0`). If you see a `ModuleNotFoundError` instead, check that you're installing into the same Python environment you plan to run your code from.

---

## Step 2: Get Your API Key

1. Go to [console.anthropic.com](https://console.anthropic.com) and sign in.
2. In the left sidebar, click **API Keys**.
3. Click **Create Key**, give it a name (e.g., `my-first-project`), and copy the key.

> **Keep this key private.** Don't commit it to version control or paste it directly into your code. If a key is accidentally exposed, rotate it immediately from the Console.

---

## Step 3: Set Your API Key as an Environment Variable

The SDK automatically reads your key from the `ANTHROPIC_API_KEY` environment variable. This keeps credentials out of your code.

**macOS/Linux:**
```bash
export ANTHROPIC_API_KEY="your-api-key-here"
```

**Windows (Command Prompt):**
```cmd
set ANTHROPIC_API_KEY=your-api-key-here
```

**Windows (PowerShell):**
```powershell
$env:ANTHROPIC_API_KEY = "your-api-key-here"
```

To make this permanent, add the export line to your `~/.zshrc`, `~/.bashrc`, or your system's environment variable settings.

---

## Step 4: Make Your First API Call

Create a file called `hello_claude.py` and add the following:

```python
import anthropic

client = anthropic.Anthropic()

message = client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "What is the capital of France? Answer in one sentence."}
    ]
)

print(message.content[0].text)
```

Run it:

```bash
python hello_claude.py
```

**Expected output:**
```
The capital of France is Paris.
```

If you see an `AuthenticationError` instead, double-check that your `ANTHROPIC_API_KEY` environment variable is set in the same terminal session where you're running the script.

---

## Step 5: Understand the Response

Before building something more complex, it's worth understanding what the API returns. Add this to `hello_claude.py` to inspect the full response object:

```python
print(message)
```

You'll see something like:

```
Message(
    id='msg_01XFDUDYJgAACzvnptvVoYEL',
    content=[ContentBlock(text='The capital of France is Paris.', type='text')],
    model='claude-sonnet-4-6',
    role='assistant',
    stop_reason='end_turn',
    stop_sequence=None,
    type='message',
    usage=Usage(input_tokens=19, output_tokens=10)
)
```

A few things to note:

- **`content`** is a list. Most responses contain a single `ContentBlock` with `type='text'`, which is why you access `message.content[0].text`. If you use tool use or multimodal features, this list can contain multiple blocks.
- **`stop_reason`** tells you why the model stopped generating. `end_turn` means the model finished naturally. `max_tokens` means it hit the token limit you set — in that case, the response may be truncated.
- **`usage`** shows how many tokens were consumed. This is what Anthropic bills against.

---

## Step 6: Build a Document Summarizer

Now let's build something practical: a function that accepts any text and returns a structured summary.

Create a new file called `summarizer.py`:

```python
import anthropic


def summarize(text: str, bullet_count: int = 5) -> str:
    """
    Summarize a document as a bullet-point list.

    Args:
        text: The document text to summarize.
        bullet_count: Number of bullet points to generate (default: 5).

    Returns:
        A string containing the bullet-point summary.
    """
    client = anthropic.Anthropic()

    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=1024,
        messages=[
            {
                "role": "user",
                "content": (
                    f"Summarize the following document in exactly {bullet_count} bullet points. "
                    "Each bullet should be one sentence. Return only the bullet points, "
                    "no introduction or conclusion.\n\n"
                    f"{text}"
                ),
            }
        ],
    )

    return message.content[0].text


if __name__ == "__main__":
    sample = """
    The Apollo program was a United States human spaceflight initiative carried out from
    1961 to 1972 by NASA. It accomplished the first crewed lunar landing on July 20, 1969,
    with Apollo 11. Neil Armstrong and Buzz Aldrin became the first humans to walk on the
    Moon, while Michael Collins orbited above. Five subsequent missions also landed
    astronauts on the Moon, for a total of twelve people walking on its surface.
    The program was cancelled after Apollo 17 in December 1972.
    """

    summary = summarize(sample, bullet_count=3)
    print(summary)
```

Run it:

```bash
python summarizer.py
```

**Expected output (will vary slightly):**
```
• NASA's Apollo program (1961–1972) successfully landed humans on the Moon for the first time on July 20, 1969.
• Apollo 11 crew members Neil Armstrong and Buzz Aldrin walked on the lunar surface while Michael Collins orbited above.
• A total of six missions landed on the Moon, with twelve astronauts walking on its surface before the program ended in December 1972.
```

---

## Step 7: Handle Errors Gracefully

Production code needs to handle API errors without crashing. The SDK raises specific exception types for different failure modes:

```python
import anthropic


def summarize_safe(text: str) -> str | None:
    """Summarize text, returning None on failure instead of raising."""
    client = anthropic.Anthropic()

    try:
        message = client.messages.create(
            model="claude-sonnet-4-6",
            max_tokens=1024,
            messages=[{"role": "user", "content": f"Summarize in 3 bullets:\n\n{text}"}],
        )
        return message.content[0].text

    except anthropic.AuthenticationError:
        print("Authentication failed. Check that ANTHROPIC_API_KEY is set and valid.")
        return None

    except anthropic.RateLimitError:
        print("Rate limit reached. Wait a moment before retrying.")
        return None

    except anthropic.BadRequestError as e:
        print(f"Invalid request: {e}")
        return None

    except anthropic.APIError as e:
        print(f"API error ({e.status_code}): {e.message}")
        return None
```

**When you'll hit each error:**

| Error | Common cause |
|---|---|
| `AuthenticationError` | Key is missing, malformed, or revoked |
| `RateLimitError` | Too many requests per minute on your current plan |
| `BadRequestError` | Input exceeds the model's context window, or invalid parameters |
| `APIError` | Server-side errors (5xx); safe to retry with exponential backoff |

---

## Step 8: What to Build Next

You now have a working integration. Here's where to go from here:

**System prompts** — Add a `system` parameter to shape how Claude responds across the entire conversation:
```python
client.messages.create(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    system="You are a technical editor. Respond in plain language suitable for a general audience.",
    messages=[{"role": "user", "content": "Explain how DNS works."}]
)
```

**Streaming** — Get response text as it generates instead of waiting for the full response. Useful for long outputs or chat interfaces:
```python
with client.messages.stream(
    model="claude-sonnet-4-6",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Write a haiku about APIs."}]
) as stream:
    for text in stream.text_stream:
        print(text, end="", flush=True)
```

**Multi-turn conversations** — Pass the full message history to maintain context across turns:
```python
messages = [
    {"role": "user", "content": "What is machine learning?"},
    {"role": "assistant", "content": "Machine learning is..."},
    {"role": "user", "content": "Can you give me a concrete example?"},
]
```

**Further reading:**
- [Anthropic API Reference](https://docs.anthropic.com/en/api)
- [Model overview](https://docs.anthropic.com/en/docs/about-claude/models)
- [Prompt engineering guide](https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview)
