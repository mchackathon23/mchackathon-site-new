#!/bin/bash
tmux split-window -h
tmux split-window -v
tmux send-keys -t 0 'sass --watch src/scss/styles.scss src/scss/styles.css' Enter
tmux send-keys -t 1 'nvim' Enter
tmux send-keys -t 2 'npm run dev -- --open' Enter
tmux resize-pane -t 1 -Z
