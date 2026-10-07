-- A member's display language ('en', 'de'): the web app shows itself in it on their own devices.
-- NULL follows each device (its own pick, then the browser's language).
ALTER TABLE members ADD COLUMN language TEXT;
