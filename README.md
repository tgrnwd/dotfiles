# \\[._.]/ - Hi, I'm the MacOS bot

I will update your MacOS machine with Better™ system defaults, preferences, software configuration and even auto-install some handy development tools and apps that my developer friends find helpful.

You don't need to install or configure anything upfront! This works with a brand-new machine from the factory as well as an existing machine that you've been working with for years.

# Installation

> Note: I recommend forking this repo in case you don't like anything I do and want to set your own preferences (and pull request them!)

> ☢️ REVIEW WHAT THIS SCRIPT DOES PRIOR TO RUNNING: https://github.com/tgrnwd/dotfiles/blob/master/install.sh
> It's always a good idea to review arbitrary code from the internet before running it on your machine with sudo power!
> You are responsible for everything this script does to your machine
> The creator of this repo has a high tolerance for nuking his machine and starting over. If you have a low tolerance for this, proceed with caution.

```bash
git clone --recurse-submodules git@github.com:tgrnwd/dotfiles.git ~/.dotfiles

cd ~/.dotfiles;

./install.sh
```

> Note: running install.sh is idempotent. You can run it again and again as you add new features or software to the scripts! I'll regularly add new configurations so keep an eye on this repo as it grows and optimizes.

## Restoring Dotfiles

If you have existing dotfiles for configuring git, zsh, vim, etc, these will be backed-up into `~/.dotfiles_backup/$(date +"%Y.%m.%d.%H.%M.%S")` and replaced with the files from this project. You can restore your original dotfiles by using `./restore.sh $RESTOREDATE` where `$RESTOREDATE` is the date folder name you want to restore.

> The restore script does not currently restore system settings--only your original dotfiles. To restore system settings, you'll need to manually undo what you don't like (so don't forget to fork, review, tweak)


# Additional

## Crontab
You can `cron ~/.crontab` if you want to add my nightly cron software updates.

> \\[0_0]/ - Note that this may wake you in the morning to compatibility issues so use only if you like being on the edge