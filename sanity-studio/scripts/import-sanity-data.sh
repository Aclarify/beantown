# Add this script to the scripts folder in your sanity studio
# Add ./node_modules/.bin to your path
export PATH=./node_modules/.bin:$PATH

# Script should be able to accept 2 parameters: dataset name, dataset dump file
# Handle validation of parameters
if [ $# -ne 2 ]; then
    echo "Invalid number of parameters"
    echo "Usage: import-sanity-data <dataset> <dataset-dump-file>"
    exit 2
fi

# Handle validation of dataset name
if [ "$1" != "develop" ] && [ "$1" != "production" ] && [ "$1" != "staging" ]; then
    echo "Invalid dataset name. Could be one of develop or production or staging"
    echo "Usage: import-sanity-data <dataset> <dataset-dump-file>"
    exit 2
fi

# Handle validation of dataset dump file
if [ -z "$2" ]; then
    echo "Invalid dataset dump file."
    echo "Usage: import-sanity-data <dataset> <dataset-dump-file>"
    exit 2
fi

# Check if the dataset dump file exists
if [ ! -f "$2" ]; then
    echo "Dataset dump file does not exist."
    echo "Usage: import-sanity-data <dataset> <dataset-dump-file>"
    exit 2
fi

# Output the current sanity environment details for debugging and ask the user if they are okay to continue
echo "Current sanity environment details:"
sanity debug
# Display this in a different color
echo "\033[1;33mYou are trying to import $1 data to the above environment. \033[0m"
echo "\033[1;33mWARNING: This is a destructive operation. Ensure you take a back up before proceeding. \033[0m Are you sure you want to continue? (y/n)"
read answer
if [ "$answer" != "${answer#[Yy]}" ] ;then
    echo "Continuing..."
else
    echo "Exiting..."
    exit 1
fi

# Import the dataset
echo "Importing $1 dataset..."
sanity dataset import $2 $1 --replace