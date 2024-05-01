# Development Notes

## Install GNUPG and Ruby (new environment)
```
brew install gnupg
gpg --keyserver keyserver.ubuntu.com --recv-keys 409B6B1796C275462A1703113804BB82D39DC0E3 7D2BAF1CF37B13E2069D6956105BD0E739499BDB
\curl -sSL https://get.rvm.io | bash
source /Users/andrewherman/.rvm/scripts/rvm
```

## When creating new Codespace:
```
rvm install "ruby-3.0.5"
```

## When (re)starting codespace:
```
rvm use 3.0.5
gem install bundler jekyll
bundle update
bundle exec jekyll serve
```

In PORTS tab, right-click Visibility , set to "Public"
Click on/copy+paste link

## Format HTML:
```
Shift + Option + F
```

## Quick Open Files
```
Cmd + P
```

## Command Palette
```
Shift + Cmd + P

Type/select 'Format' to format/"prettify" document
```