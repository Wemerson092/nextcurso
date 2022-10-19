import styles from '../styles/Estiloso.module.css'
import Link from 'next/link'
import Layout from '../src/components/Layout'

export default function Estiloso() {
    return (
        <Layout>
            <div className={styles.roxo}>
                <h1>Estilo css</h1>           
            </div>
        </Layout>

    )
}