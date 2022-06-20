// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import DefaultLayout from 'src/layouts/DefaultLayout'
import DogsLayout from 'src/layouts/DogsLayout'
import UsersLayout from 'src/layouts/UsersLayout'
import WalksLayout from 'src/layouts/WalksLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={DefaultLayout}>
        <Route path="/" page={HomePage} name="home" />

        <Set wrap={WalksLayout}>
          <Route path="/walks/new" page={WalkNewWalkPage} name="newWalk" />
          <Route path="/walks/{id:Int}/edit" page={WalkEditWalkPage} name="editWalk" />
          <Route path="/walks/{id:Int}" page={WalkWalkPage} name="walk" />
          <Route path="/walks" page={WalkWalksPage} name="walks" />
        </Set>
        <Set wrap={DogsLayout}>
          <Route path="/dogs/new" page={DogNewDogPage} name="newDog" />
          <Route path="/dogs/{id:Int}/edit" page={DogEditDogPage} name="editDog" />
          <Route path="/dogs/{id:Int}" page={DogDogPage} name="dog" />
          <Route path="/dogs" page={DogDogsPage} name="dogs" />
        </Set>
        <Set wrap={UsersLayout}>
          <Route path="/users/new" page={UserNewUserPage} name="newUser" />
          <Route path="/users/{id:Int}/edit" page={UserEditUserPage} name="editUser" />
          <Route path="/users/{id:Int}" page={UserUserPage} name="user" />
          <Route path="/users" page={UserUsersPage} name="users" />
        </Set>

        <Route notfound page={NotFoundPage} />
      </Set>
    </Router>
  )
}

export default Routes
