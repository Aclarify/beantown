# Add this script to the scripts folder in your sanity studio
# Add ./node_modules/.bin to your path
export PATH=./node_modules/.bin:$PATH

# Script should be able to accept 2 parameters: dataset name, and output folder

# Handle validation of parameters
if [ $# -ne 2 ]; then
    echo "Invalid number of parameters"
    echo "Usage: export-sanity-data <dataset> <output-folder>"
    exit 2
fi

# Handle validation of dataset name
if [ "$1" != "develop" ] && [ "$1" != "production" ]  && [ "$1" != "staging" ]; then
    echo "Invalid dataset name. Could be one of develop or production or staging"
    echo "Usage: export-sanity-data <dataset> <output-folder>"
    exit 2
fi

# Handle validation of output folder
if [ -z "$2" ]; then
    echo "Invalid output folder name."
    echo "Usage: export-sanity-data <dataset> <output-folder>"
    exit 2
fi

# Check if the output folder exists, else create it
if [ ! -d "$2" ]; then
    echo "Output folder does not exist. Creating it..."
    mkdir -p $2
fi

# Output the current sanity environment details for debugging and ask the user if they are okay to continue
echo "Current sanity environment details:"
sanity debug
echo "You are trying to export $1 data from the above environment. Are you sure you want to continue? (y/n)"
read answer
if [ "$answer" != "${answer#[Yy]}" ] ;then
    echo "Continuing..."
else
    echo "Exiting..."
    # Remove the output folder
    exit 1
fi

# Export the dataset
echo "Exporting $1 dataset..."
# Output to file with current date
sanity dataset export $1 $2/$1-$(date +%Y-%m-%d).tar.gz


