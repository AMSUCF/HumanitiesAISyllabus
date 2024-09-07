# Let's process the provided files to remove the Project Gutenberg headers and footers.

# Load the files
file_paths = [
    '/mnt/data/Gilman.txt', 
    '/mnt/data/MacLean.txt',
    '/mnt/data/Dick.txt',
    '/mnt/data/Silverberg.txt',
    '/mnt/data/Vonnegut.txt'
]

# Define a function to remove the Gutenberg header and footer
def clean_gutenberg_text(text):
    # Identify the start and end markers for Gutenberg headers and footers
    start_marker = "*** START OF"
    end_marker = "*** END OF"
    
    # Find the start and end positions for the content
    start_idx = text.find(start_marker)
    end_idx = text.find(end_marker)
    
    # If markers are found, remove headers/footers
    if start_idx != -1 and end_idx != -1:
        cleaned_text = text[start_idx + len(start_marker):end_idx].strip()
    else:
        cleaned_text = text  # If no markers found, return original text
    
    return cleaned_text

# Clean all files
cleaned_texts = []
for file_path in file_paths:
    with open(file_path, 'r', encoding='utf-8') as file:
        raw_text = file.read()
        cleaned_text = clean_gutenberg_text(raw_text)
        cleaned_texts.append(cleaned_text)

# Saving cleaned versions of the files
cleaned_file_paths = [
    '/mnt/data/Cleaned_Gilman.txt',
    '/mnt/data/Cleaned_MacLean.txt',
    '/mnt/data/Cleaned_Dick.txt',
    '/mnt/data/Cleaned_Silverberg.txt',
    '/mnt/data/Cleaned_Vonnegut.txt'
]

for cleaned_text, cleaned_file_path in zip(cleaned_texts, cleaned_file_paths):
    with open(cleaned_file_path, 'w', encoding='utf-8') as cleaned_file:
        cleaned_file.write(cleaned_text)

cleaned_file_paths  # Output paths of the cleaned files.
