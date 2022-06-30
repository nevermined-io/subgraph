for d in ./subgraphs/*
do
    BASENAME=$(basename "$d" | tr "[:upper:]" "[:lower:]")
    echo $BASENAME
done