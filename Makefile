CHECK=\033[32m✔ Done\033[39m
FORMATTED_DATE=`date +'%Y-%m-%d'`

all: server compass

server:
	@echo "\033[36m⚡️  Dailymotion Puzzles ⚡️\033[39m"
	@jekyll serve --watch --baseurl ''

compass:
	@compass watch

new:
	@if [ -f _posts/$(FORMATTED_DATE)-$(filter-out $@,$(MAKECMDGOALS)).md ] ; \
	then \
		echo "\033[31mError:\033[39m Post already exists"; \
		exit 2; \
	fi;
	@echo "\nCreating new puzzle:" $(filter-out $@,$(MAKECMDGOALS))
	@cp template.md _posts/$(FORMATTED_DATE)-$(filter-out $@,$(MAKECMDGOALS)).md
	@printf "\033[36mFile "
	@printf _posts/$(FORMATTED_DATE)-$(filter-out $@,$(MAKECMDGOALS)).md
	@echo " created\033[39m"
	@echo "${CHECK} 🍻\n"


# Wtf is this shit? I don't know.
# Deep makefile voodoo crap just to get cli arguments. lol.
# Source here: http://stackoverflow.com/a/6273809/1123278
%:
	@:
