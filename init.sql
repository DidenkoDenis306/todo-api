CREATE TABLE IF NOT EXISTS todos
(
    id
    SERIAL
    PRIMARY
    KEY,
    title
    VARCHAR
(
    255
) NOT NULL,
    description TEXT,
    due_date DATE,
    user_id INTEGER NOT NULL
    );
