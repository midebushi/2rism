
import styles from './Form.module.css'

import Button from '../Buttons/Button/Button';

import Search from '../Icons/Search/Search';

interface FormItem {
  icon: React.ReactNode;
  label: string;
  placeholder: string;
  type: string;
}

interface FormProps {
    action: string;
    items: FormItem[];
    type: "transparent" | "fill";
}

const Form: React.FC<FormProps> = ({ action, items, type }) => {
  return (
    <form className={`${styles.form} ${styles[type]}`} action={action}>
        {items.map((item, index) => {
            return (
              <div className={styles.inputContainer} key={index}>
                {item.icon}
                <label className={styles.label}>{item.label}
                  <input className={styles.input} type={item.type} placeholder={item.placeholder} id={index.toString()}/>
                </label>
              </div>
            )
        })}
      <Button type='main' size='large' icon={<Search/>}></Button>
    </form>
  )
}

export default Form
