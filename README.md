# bencan.net

This is the source code for my personal website, [bencan.net](https://bencan.net). Built with Next.js and Tailwind CSS. 

## Table of Contents

- [Self-Hosting](#self-hosting)
- [Contributing](#contributing)
- [Help](#help)
- [License](#license)
- [Star History](#star-history)

## Self-Hosting

To self-host this website, you will need the following prerequisites:

- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)
- [Git](https://git-scm.com/downloads)
Once you have the prerequisites installed, follow these steps to self-host Lantern:

1. Clone the repository to your local machine:

```bash
git clone https://github.com/chimpdev/bencan.net.git
```

2. Navigate to the cloned repository:

```bash
cd bencan.net
```

3. Install the required dependencies:

```bash
pnpm install
```

5. Rename the `.env.example` file to `.env` and fill in the configuration values:

```env
SPOTIFY_CLIENT_ID=
SPOTIFY_CLIENT_SECRET=
SPOTIFY_REDIRECT_URL=
SPOTIFY_REFRESH_TOKEN=
```

> [!NOTE]
> - To get the Spotify API credentials, you need to create a Spotify Developer account and create a new application. After creating the application, you will get the client ID and client secret. Don't forget to set the redirect URL to `https://YOUR_DOMAIN/api/spotify/callback` where `YOUR_DOMAIN` is the domain where you are hosting the website.
> - To get the Spotify refresh token, after you have set the client ID, client secret, and redirect URL, skip this step and start the server. The server will automatically start at `http://localhost:3000`. Visit `http://localhost:3000/api/spotify` and log in with your Spotify account. After logging in, you will be redirected to `http://localhost:3000/api/spotify/callback`. The refresh token will be displayed on the page. Copy the refresh token and paste it in the `.env` file. After pasting the refresh token, restart the server. With this implementation, every 1 hour the server will automatically get a new access token using the refresh token and display your recently played tracks on the website. If you want to get rid of "recently played tracks" functionality, you can just use empty .env file.

6. Start the server:

```bash
pnpm start
```

5. The server should now be running on `http://localhost:3000`.

## Contributing

I'm always open to contributions from the community! If you'd like to contribute to the project, please follow these guidelines:

1. Fork the repository and clone it locally.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure the code passes any existing tests.
4. Commit your changes with descriptive commit messages that follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standard.
5. Push your changes to your fork and submit a pull request to the `main` branch of the original repository.

Please make sure to follow the [Code of Conduct](.github/CODE_OF_CONDUCT.md) and [Contributing Guidelines](.github/CONTRIBUTING.md) when contributing to this project.

## Help

If you encounter any issues with the project or have any questions, feel free to [open an issue](https://github.com/chimpdev/bencan.net/issues) on this repository. I am always happy to help!

## License

This project is licensed under [the GNU General Public License v3.0](LICENSE).

## Star History

<a href="https://star-history.com/#chimpdev/bencan.net&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=chimpdev/bencan.net&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=chimpdev/bencan.net&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=chimpdev/bencan.net&type=Date" />
 </picture>
</a>