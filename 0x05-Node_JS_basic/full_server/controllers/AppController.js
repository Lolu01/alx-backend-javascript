/**
 * Contains the miscellaneous route handlers.
 * @author Jaiyeola Lolu <https://github.com/Lolu01>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
