---
title: Pokemon TCG Discord Bot
projectUrl: https://github.com/aboutblank0/pokemon-tcg-discord-bot
priority: 5
imageFileName: discordBot
skills: [Python, SQLAlchemy, PostgreSQL, Docker, Alembic]
---

Discord bot where you can collect pokemon cards. Heavily inspired by the already existing [Karuta Discord Bot](https://karuta.com/).

Each card dropped by the bot is given a unique appearance through a combination of a randomly generated `float_value` and `pattern_number`, which determine how "damaged" the card looks. This adds an exciting layer of randomness (RNG) to the experience, making it more engaging for users. The randomness is seeded using the ID of the Pokémon TCG card, ensuring that even cards with the same `pattern_number` and `float_value` will have distinct appearances.
