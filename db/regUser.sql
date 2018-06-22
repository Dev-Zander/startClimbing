INSERT INTO registrations(num_guest, session_time,first_name, last_name, middle_initial, email_address, phone_number, age_check,legal_check, tos_check,confirmation_number )
VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)
RETURNING*