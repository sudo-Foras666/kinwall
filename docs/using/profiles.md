# Profiles

Everyone in the family has a profile: a page about what they've been up to. Chores done, points earned and spent, their streak, books read, the sticker book, time in activities, milestone badges and their birthday. It's built from what Kinwall already keeps, so there's nothing new to fill in.

A profile is about one person. It never ranks brothers and sisters or puts their numbers side by side; the only comparison is with their own earlier days ("▲ 4 more than last week"). Health entries from [Trackers](trackers.md) never show on it.

## Opening a profile

* **Chores**: tap someone's pill on the leaderboard.
* **Header**: tap a person's avatar (on a phone, the family button, then the person), then **Profile** at the top of their day.
* **Me**: a device that belongs to one person (set under [Settings → Access](../settings/access.md)) gets **Me** in the menu, right after Chores. It opens their own profile.
* On a tablet or wall screen, the row of people at the top switches between profiles.

Everyone in the family can see everyone's profile, on every device. An idle wall screen goes back to the calendar as usual.

## Profile pictures

Instead of an emoji, a person can have a picture: a family photo, one of their Paint drawings, or a photo taken just now. Tap the avatar at the top of their profile (it has a ✏️) and pick from **Picture**:

* **Emoji**: an emoji or a 1–2 letter initial, as before. Saving it takes the picture away.
* **From family photos**: any picture in [Photos](photos.md).
* **From drawings**: drawings made in [Paint](activities.md) on this device, and drawings saved to the family photos.
* **Take or upload a photo**: **Take a photo** (on phones and tablets) or **Choose a photo**.

Then drag the picture to move it and pinch (or use **Zoom**) to fit it in the circle, and tap **Save**. **Remove picture** at the bottom goes back to the emoji.

The picture shows everywhere their avatar does: the header, the Board, Chores and the leaderboard, calendar events, Newscast, their snapshot and profile, and the people pickers. It sits in a ring of their color, so color-coding still works and the picture tells people apart without the color. If it can't load (offline, say), their emoji shows instead. The Kinwall phone app's widgets and Live Activities keep showing the emoji.

Who can change it:

* **Parents**, for anyone, from the profile or **Settings → Family** (tap the person, then **Add a picture** or **Change picture**).
* **A kid**, for themselves only, on their own device. Their picture and their emoji are the only things a kid can change about themselves; the name, color and everything else stay under [Settings → Family](../settings/family.md) on a parent's device.
* Not wall screens, the phone app's widgets, or connected apps such as AI assistants.

Kinwall keeps only the small circle (256 pixels), stored with the family photos on your own server, and never the original twice: a picture cropped from the album just remembers which photo it came from. It counts toward the [photo limits](photos.md#limits) but doesn't show in the album, on the Board's picture card or in the slideshow. It's deleted when it's replaced or removed and when the person is removed, and it travels in the photo zip (see [Backing up](photos.md#backing-up-and-moving-photos)). Webhooks never carry it; connected apps see only its address on the member, like any photo.

With **Photos** turned off in [Features](../settings/general.md#features), **From family photos** (and drawings in the album) aren't offered, but taking or uploading a photo still works and pictures keep showing: a picture belongs to the person, not the album.

## Language

Kinwall comes in **English** and **Deutsch** (German). Everyone picks their own: the choice is saved in their profile on your server, so it follows them to every device of theirs (their phone, their tablet), and a wall screen or a sibling's device isn't affected.

* **On your own device**: **Settings → General → Language**. A device belongs to someone when it's set under [Settings → Access](../settings/access.md); kids can pick their own language there too.
* **Parents, for anyone**: **Settings → Family**, tap the person, then **Language**.
* **Automatic** (the default) follows the device: a device that belongs to no one (a wall screen, a shared tablet) picks its own language under **Settings → General → Language**, saved on that device only, and otherwise uses the browser's language. Anything that isn't English or German shows in English.

Dates and weekday names follow the language too. Parts of the app that aren't translated yet show in English. Things the family typed in (chore names, lists, events) stay as they were written.

Notifications follow the person too: reminders, check-in and medicine reminders, approvals and the energy battery's heads-up arrive in the language of whoever the device belongs to. A device that belongs to no one (a wall screen, a shared phone) and the family's notification list use the family's language: German when everyone who picked a language picked German, otherwise English. Messages from the server, like "Not enough points", badges, Insights and the battery's reasons, come in the language the app is showing.

## What's on it

Pick **Today**, **Week**, **Month**, **Year** or **All time** at the top. Days follow the family's time zone and the week starts on the day set in [Settings → General](../settings/general.md).

* **Chores done**, compared with the same stretch before: yesterday, last week up to the same weekday, last month or last year up to the same date. All time says when they joined.
* **Points earned** in the period, from chores, [daily check-ins](snapshot.md#daily-check-in) and [bonus points](chores.md#bonus-points).
* **Check-ins** ☀️: how many days they checked in during the period. Shown while daily check-ins are on (or once they have some).
* **Books finished** in the period (audiobooks count), with their pages and time listened.
* **Streak** 🔥 and **best ever**. It's the same streak as the [leaderboard](chores.md), grace days included, so the two numbers always match. The best streak looks back over all their history.
* **Chores done** chart: per day for a week or month, per month for a year or all time, with their busiest weekday and favorite chore. **Today** lists today's chores instead.
* **Points**: earned, spent on stickers, spent on rewards (refunds taken off), and the [reward](rewards.md) they're saving for. Tap the goal to open their rewards. Below that, their last few **bonus points** ("+10 · Helped carry groceries · from a parent"). On a parent's device, **Give points** gives more, and tapping a bonus takes it back.
* **Bookshelf**: the books they finished this year as colored spines (every book on **All time**), with pages, time listened for audiobooks, average stars, a five-star favorite and the books they're reading now. From [Trackers](trackers.md) (reading).
* **Activities**: time played in each [activity](activities.md) in the period.
* **Badges**: see below.
* **Sticker book**: packs unlocked and stickers on the page.
* **Journal** 🔒 (only on their own device and parents' devices): **Open the journal**, and with the [evening goal check](snapshot.md#evening-goal-check) on, **Goals met this week: 3 of 5** (goals answered Yes out of goals set in the last 7 days). See [Journal](journal.md).
* **Insights** 🔒 (only on their own device and parents' devices): **Open insights**, for patterns in their check-ins. Nothing from Insights shows on the profile itself. See [Insights](insights.md).
* **Medicines** 🔒 (with [medication reminders](medications.md) on, only on their own device and parents' devices): **Open medicines**. No names or doses on the profile itself.
* **Birthday**, under their name, from [Settings → Family](../settings/family.md): a countdown in the 60 days before ("Turns 8 in 35 days"), "Turned 8 on Sep 13 🎂" for two weeks after, and their age ("8 years old") the rest of the year. Without a birth year it says "Birthday in 35 days" or "Birthday was Sep 13", and nothing the rest of the year.

Cards with nothing to show stay hidden, so a grown-up's profile usually has no sticker book or activities. Cards follow the family's [features](../settings/general.md#features): with **Chores & points** off, chores, points, streak and the sticker book go; with reading off, the bookshelf goes.

### Parents only

On a parent's device (full access), a **Waiting for your OK** card shows that person's chores and rewards waiting for approval, with a button to go approve them. Wall screens and kids' devices never see it.

## Badges

Twelve milestone badges, earned from all-time totals. Once earned, they stay: deleting a chore that was done keeps its history (see [Chores](chores.md)).

| Badge | Earned for |
|---|---|
| 🌱 First chore | The first chore done |
| ⭐ 10 chores | 10 chores done |
| 🏅 50 chores | 50 chores done |
| 💯 100 chores | 100 chores done |
| 🏆 500 chores | 500 chores done |
| 🔥 7-day streak | A best streak of 7 days |
| 🌟 30-day streak | A best streak of 30 days |
| 🎁 First reward | A reward approved or given |
| 🎨 First sticker pack | A sticker pack bought |
| 📒 Every sticker pack | Every sticker pack unlocked |
| 📖 First book | A book or audiobook finished |
| 📚 10 books | 10 books finished, audiobooks included |

Badges not earned yet show grayed out.

## API and MCP

`GET /api/members/{id}/stats?period=today|week|month|year|all` returns everything on a profile. Wall screens and kids' devices can read it too. See [REST API → Member stats](../integrations/rest-api.md#member-stats). The MCP tool `get_member_profile` returns the same for a member by name.
