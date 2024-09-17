# Marvel Universe Explorer

This project is a React-based web application that allows users to explore Marvel characters and comics. Users can search for specific characters, view the comics they've appeared in, and explore detailed information about individual comics.

## Features

- **Marvel Characters Page**: 
  - Browse through a list of Marvel characters.
  - Search for a specific character by name.
  - View details about the character, including a list of comics they have appeared in.
  - Navigate to a detailed page for each character.

- **Marvel Comics Page**: 
  - Browse through a list of Marvel comics.
  - Click on a comic to view more information, including its release date, creators, and a list of characters that appear in the comic.

## Project Structure

```bash
src/
│
├── components/
│   ├── app/                     # Contains the main app components like AppBanner and AppHeader.
│   ├── appBanner/                # Banner component for the app's header.
│   ├── appHeader/                # Header component for the app.
│   ├── charInfo/                 # Displays detailed information for a selected character.
│   ├── charList/                 # Displays the list of Marvel characters.
│   ├── charSearchForm/           # Allows users to search for characters by name.
│   ├── comicsList/               # Displays the list of Marvel comics.
│   ├── errorBoundary/            # Handles errors within the app and displays a fallback UI.
│   ├── errorMessage/             # Component to display error messages.
│   ├── pages/                    # Handles routing for individual character and comic pages.
│   ├── randomChar/               # Displays a random Marvel character.
│   ├── skeleton/                 # Loading skeleton for UI components.
│   └── spinner/                  # Loading spinner for indicating async actions.
│
├── hooks/                        # Custom React hooks used throughout the project.
├── resources/                    # Static resources such as images and data.
├── services/                     # API-related files, including Marvel API interaction.
│   └── MarvelService.js          # Contains API requests to fetch character and comic data.
├── style/                        # Global styles for the application.
├── index.js                      # Entry point for the React app.
└── ...
