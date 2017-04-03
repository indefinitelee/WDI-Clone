-- LEFT JOIN
-- SELECT *
-- FROM students
-- LEFT JOIN cohorts
--   ON (students.cohort_id = cohorts.cohort_id);

-- SELECT
--   students.name AS student_name,
--   cohorts.name AS cohort_name,
--   cohorts.class AS class
-- FROM students
-- LEFT JOIN cohorts
--   ON (students.cohort_id = cohorts.cohort_id);


-- SELECT *
-- FROM students
-- INNER JOIN cohorts
--   ON(students.cohort_id = cohorts.cohort_id);

-- GET all students in Melville
SELECT
  students.name AS students,
  cohorts.name AS cohort
FROM students
INNER JOIN cohorts
  ON(students.cohort_id = cohorts.cohort_id)
WHERE cohorts.name = 'Melville';
