import React from "react"
import {useEthers} from "@usedapp/core"
import styles from './styles'
import {uniswapLogo} from './assets'
import {Exchange,Loader,WalletButton} from './components'

import {usePools} from './hooks'

const App = () => {
  const {account}= useEthers()

  const [loading,pools]=usePools()

  
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img src={uniswapLogo} alt='logo' 
          className="w-16 h-16 object-contain"/>
          <WalletButton/>
        </header>
        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle} style={{color:'white'}}>Uniswap 2.0</h1>
          <p className={styles.subTitle}>Trade tokens in an instant</p>
          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient"/>
              <div className={styles.exchange}>
                  {account?(
                    loading?(<Loader title="Loading pools, please wait!"/>):<Exchange pools={pools}/>
                  ):<Loader title="please connect your wallet!"/>}
              </div>
              <div className="blue_gradient"/>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;