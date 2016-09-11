# show hidden files in OSX finder
[Reference](https://forum.keyboardmaestro.com/t/macro-finder-show-hide-hidden-files/4535)
```
defaults write com.apple.finder AppleShowAllFiles -bool true && pkill Finder
```

# show git log pretty
```
$ git log --pretty=oneline
567f773ad29e0da92cc5ea9b24c4ee680c15cba3 SVM 1.D.2) Record vote and ballot submission in database
f1f743a1f612a4b54c46e1ce68912e355c21bfec SVM 1.D.1) Save ballot submission in store and confirm DB save
98f9c7f2d0c3577a62a6a1f1625cc31426dc3164 SVM 1.C.2) Put selectedCandidate in store and render result
3f1c5cef4b23cd061b337db3e7bac6724c61c9f8 SVM 1.C.1) Create UI to Submit Vote for Candidate
4c823af121318185c982d29cabd224232ab44f50 SVM 1.B.2) Load Candidates from Store into UI
b3e26b621fac69cec7a7dd8f3933d1d885d05875 SVM 1.B.1) Create UI for List of Candidates
3186cae38c803b8c4b2f6479118275f7f9770800 Create insertCandidate method, Create fixtures for Candidates
7f3ba6b41a067f17c9745c6105139bcc18a32246 empty structure, base framework and docs written
```
