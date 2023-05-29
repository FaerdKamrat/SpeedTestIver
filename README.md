# SpeedTestIver

## purpose
Backend kommer att göra ett internet hastighetstest varje 30 minuter.
Denna data kan bli requestad av Frontend. 
Frontend kommer att requesta internet hastighet datan och kommer att rita en graf med hjälp av Chart.js och dess React bibliotek.

## Setup
Man måste fixa en .env fil i /backend där du ger en port för att sätta upp serveren. 
i .env ska också en postgresql database länk sättas upp. Läs prisma docs för det.

## Installation
### /frontend
    npm i

### /backend
    npm i
    npx prisma init
    npx prisma migrate
    npx prisma generate



