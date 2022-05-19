# battleship

Replicating battleship strategy game.

<img src="https://img.shields.io/badge/Babel-F9DC3E?style=for-the-badge&logo=babel&logoColor=white" /> <img src="https://img.shields.io/badge/Webpack-8DD6F9?style=for-the-badge&logo=Webpack&logoColor=white"> <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white"> <img> <img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" alt="Jest">

## About

The project's main purpose is getting familiar with TDD. Test driven development can be quite overwhelming , while testing standard functions isolated from DOM manipulating bits, testing implementation comes naturally but as it seems when the pure logic has deep correlations with the appearance of the web-page mocking becomes overwhelming if not redundant . Thus, testing the appearence of the application is outside the scope of this project.

The main logic of battleship is built around three major objects factories : the player, the board and the ship . Each player is assigned a board object that contains ships . Ai players can generate their own ship order, while users can place their own ships using drag-and with drag-drop events.

About the drag and drop implementation . There is no real use for data transfer in this project, since it heavily depends on the DOM created grids for registering the position of "DOM" pieces in two dimensional arrays. Thus , drop events only pass relevant information on the grids, without actually "completing" the drop events.

The main game app of the game is created only after every Player's, Ship or board's public method has been tested with JEST. The game loop should only step through the game using only methods provided by the three main objects.

### Notes

While the pure logic of a battleship game is fairly simple, functional purity is rather hard to maintain. Since testing can't be used for Appearance at this point , achieving ideal testing seem not possible . While the core-idea of TDD is building tightly secured designs, a great deal of familiarity is essential to reach such a goal .
