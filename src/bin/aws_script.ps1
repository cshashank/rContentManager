http://skcliterature.s3-website.us-east-2.amazonaws.com/
aws configure
aws s3 ls
aws s3 ls s3://skcliterature
aws s3 sync . s3://skcliterature --delete
# delete all files from s3 bucket
aws s3 rm s3://skcliterature --recursive
