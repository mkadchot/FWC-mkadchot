if [ "$#" -eq 0 ]; then
  echo "No arguments supplied"
  exit 1
fi
for folder in "$@"; do
  new_folder="ex${folder}"
  if mkdir "$new_folder" 2>/dev/null; then
    echo "Folder '$new_folder' created successfully."
  else
    echo "Error creating folder '$new_folder'."
  fi
done
echo "Finished processing folder names."