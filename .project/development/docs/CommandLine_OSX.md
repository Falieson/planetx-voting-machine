# show hidden files in OSX finder
[Reference](https://forum.keyboardmaestro.com/t/macro-finder-show-hide-hidden-files/4535)
```
defaults write com.apple.finder AppleShowAllFiles -bool true && pkill Finder
```
