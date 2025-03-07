import os
import google.generativeai as genai
from dotenv import load_dotenv

# Load API key from .env file
load_dotenv()
GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

# Initialize Gemini (Google's SDK)
genai.configure(api_key=GEMINI_API_KEY)

'''for model in genai.list_models():
    print(model.name)'''

model = genai.GenerativeModel('models/gemini-2.0-flash')  # Use 'gemini-pro' or other available models.

def get_gemini_advice(code, prompt):
    """Send code to Gemini and get advice."""
    response = model.generate_content(
        f"Here is my Astro file:\n{code}\n\n{prompt}",
        generation_config=genai.types.GenerationConfig(
            max_output_tokens=2048  # Adjust as needed
        ),
        safety_settings=[
            {
                "category": genai.types.HarmCategory.HARM_CATEGORY_HARASSMENT,
                "threshold": genai.types.HarmBlockThreshold.BLOCK_NONE,
            },
            {
                "category": genai.types.HarmCategory.HARM_CATEGORY_HATE_SPEECH,
                "threshold": genai.types.HarmBlockThreshold.BLOCK_NONE,
            },
            {
                "category": genai.types.HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
                "threshold": genai.types.HarmBlockThreshold.BLOCK_NONE,
            },
            {
                "category": genai.types.HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
                "threshold": genai.types.HarmBlockThreshold.BLOCK_NONE,
            },
        ]
    )
    return response.text

def main():
    file_path = "src/pages/index.astro"  # Adjust if needed
    prompt = "How can I make the font size smaller in the experience and education sections?"

    # Read the file
    with open(file_path, "r", encoding="utf-8") as f:
        astro_code = f.read()

    # Get advice from Gemini
    suggestion = get_gemini_advice(astro_code, prompt)

    # Print the suggestion
    print("\n--- Gemini's Advice ---\n")
    print(suggestion)

if __name__ == "__main__":
    main()
