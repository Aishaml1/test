import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      <h1> Welcome to the Homepage</h1>
      <h1>Lets make Github blow upppppppppp</h1>
    </main>
  )
}

export default Landing
