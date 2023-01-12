import {useEffect, useState} from 'react';
import TitlePage from "../../components/TitlePage";
import userService from '../../services/user.service';
import styles from "./index.module.scss";
import Button from "../../components/Button";
//import Loader from "../../components/Loader";

const Index = () => {

  const [user, setUser] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    userService.getMe(token)
      .then((user) => {
        console.log(user);
        setUser(user);
      })
      .catch(err => console.log(err))
  }, []);

  return (
    <>
      <TitlePage title="Mon profil"/>
      <div className={styles.wrapper}>
        {
          user ? (
            <>
                <p>FirstName : {user.firstName}</p>
                <p>lastName : {user.lastName}</p>
                <p>Email : {user.email}</p>
            </>
          ) : <p>...loading</p>
        }
        <Button
          title="Modifier"
          handleClick={() => console.log("open modal")}
          type="button"
          btnClass="btn btn__primary"
        />
      </div>
    </>
  );
}

export default Index;