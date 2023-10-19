1. Init project and structure
2. Setup developer environment
3. Install express and nodemon
    - Configure static middleware
    - Configure bodyparser
    - Configure routers
4. Add images and css in public directory
5. Add html files in view directory
6. Install express-handlebars
    - Configure view engine
    - Add main layout
    - Fix hyperlink styles
    - Fix home navigation
    - Render home page in hbs
7. Convert all html files to handlebars views
    - Group views
8. Add controller folder with home controller
9. Add database
    - Install mongoose
    - Connect to DB
10. Prepare user functionality
    - User controller
    - Add controller to routes
    - Fix navigatioons in nav bar ( login, register, logout)
    - Render register page
    - Render login page
11. Add user model
    - Simple validation in Schema
    - Add method for register
    - Create first user record in db
    - Validate password missmatch
12. Hash password
    - Install bcrypt
    - Hash password
13. Login
    - Find user by email
    - Validate password with hash
14. Generate jasonwebtoken
    - Install jwt
    - Promisify jwt
    - Generate secret
    - Generate token in service login
15. Return token in cookie
    - Install cookie-parser
    - Configure cookie-parser
    - Set cookie with the token
16. Implement logout
17. Authentication middleware
    - Create middleware directory
    -Add auth middleware and import it in express config below cookie-parser
    -Decode token
    -Handle invalid token
    -Provide authorization
18. Dynamic navigation
    -confitional options in navingation
    -add data to res.locals for hbs templates
19. Error handling
    - Add 404 page
    - Redirect missing route to 404
    - Add global error handler (optional)
    - Global error (optional)
    - Add error message util
20. Show error notification
    - Show in the main layout
    - Pass error to render in login and register pages
21. Automatically login after register (bonus)