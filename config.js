module.exports = {
  brew: [
    'pkg-config',
    'gnupg',
    // Install GNU `sed`, overwriting the built-in `sed`
    // so we can do "sed -i 's/foo/bar/' file" instead of "sed -i '' 's/foo/bar/' file"
    'gnu-sed --with-default-names',
    // https://github.com/jkbrzt/httpie
    'httpie',
    // Mac App Store CLI: https://github.com/mas-cli/mas
    'mas',
    // Install wget with IRI support
    'wget --enable-iri',
    'sshfs',
    'mackup',
    'youtube-dl'
  ],
  cask: [
    '1password',
    'firefox',
    'google-chrome',
    'sequel-pro',
    'steam',
    'figma',
    'visual-studio-code',
    'vlc',
    'microsoft-outlook',
    'microsoft-teams',
    'windscribe',
    'zoomus',
    'rectangle',
    // Quick Look Plugins
    'qlcolorcode',
    'qlstephen',
    'qlmarkdown',
    'quicklook-json',
    'qlimagesize',
    'qlvideo',
    // CLI things
    'azure-cli',
    'osxfuse'
  ],
  gem: [
  ],
  npm: [
    'eslint',
    'gulp',
    'npm-check-updates',
    'prettyjson'
  ],
  mas: [
    //uBlock
    '1385985095',
    //Day One
    '1055511498'
  ],
};
