git filter-branch --commit-filter '
        if [ "$GIT_AUTHOR_EMAIL" = "hualei03042013@163.com" ];
        then
                GIT_AUTHOR_NAME="yemiancheng";
                GIT_AUTHOR_EMAIL="ymc.github@gmail.com";
                git commit-tree "$@";
        else
                git commit-tree "$@";
        fi' HEAD
