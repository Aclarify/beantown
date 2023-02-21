echo "In shell script"

# Export develop DB
echo "Exporting develop DB"
# Output to file with current date
sanity dataset export develop ./exports/develop-$(date +%Y-%m-%d).tar.gz
# Import the file to the production dataset
echo "Import develop DB to production"
sanity dataset import ./exports/develop-$(date +%Y-%m-%d).tar.gz production --replace