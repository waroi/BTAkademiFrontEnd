import { useTheme } from '../context/ThemeContext'
import Button from './Button'


const Container = () => {
  const { theme } = useTheme()
  return (
    <div className={`app ${theme}`}>
      <Button/>
    </div>
  )
}

export default Container