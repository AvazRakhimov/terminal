// import NodeJS module
const readline = require('node:readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let theme = `~$ ` // theme a.k.a shell

const question = () => {
  rl.question(theme, (text) => {
    switch (text) {
    // space (nothing) command
      case '':
        console.log("You didn't enter anything. Want to close the app?")
        q = `Enter \x1b[31my\x1b[0m or \x1b[32mn\x1b[0m: `
        rl.question(q, txt => {
          switch (txt) {
            case 'y':
              console.log('\x1b[31m%s\x1b[0m', 'Exiting...')
              rl.close()
              break
            case 'n':
              console.log('\x1b[32m%s\x1b[0m', 'Canceled.')
              question()
              break
            case txt:
              console.log('\x1b[32m%s\x1b[0m', 'Canceled.')
              question()
              break
          }
        })
        question()
        break
    /////

    // help command (v1)
      case 'help':
        console.log(`\x1b[36mabout\x1b[0m: About project\n\x1b[36mbash\x1b[0m or \x1b[36mzsh\x1b[0m: Switch shell\n\x1b[36mclear\x1b[0m: Clear terminal\n\x1b[36mcd [dir]\x1b[0m: Change directory\n\x1b[36mexit\x1b[0m: Exit from app\n\x1b[36mhelp\x1b[0m: Show commands\n\x1b[36mls\x1b[0m: List directories\n\x1b[36mneofetch\x1b[0m: Display system information\n\x1b[36mshell\x1b[0m: Show current shell\n\x1b[36mtouch\x1b[0m: Create a new file\n\x1b[36mwhereami\x1b[0m: Show current directory`)
        question()
        break
    /////

    // exit command
      case 'exit':
        console.log(`\x1b[31mExiting...`)
        rl.close()
        break
    /////

    // about command
      case 'about':
        console.log("Project Terminal made for fun.\nThis app made possible by Avaz.")
        question()
        break
    /////

    // shell
      // zsh
      case 'zsh':
        if (theme === "~$ ") {
          theme = "% ";
          console.log('Shell changed: zsh')
        } else if (theme === "~/Desktop$ ") {
          theme = "/Desktop% ";
          console.log('Shell changed: zsh')
        } else if (theme === "~/Downloads$ ") {
          theme = "/Downloads% ";
          console.log('Shell changed: zsh')
        } else if (theme === "~/Documents$ ") {
          theme = "/Documents% ";
          console.log('Shell changed: zsh')
        } else if (theme === "~/Pictures$ ") {
          theme = "/Pictures% ";
          console.log('Shell changed: zsh')
        } else if (theme === "~/Music$ ") {
          theme = "/Music% ";
          console.log('Shell changed: zsh')
        } else if (theme === "~/Videos$ ") {
          theme = "/Videos% ";
          console.log('Shell changed: zsh')
        }
        question()
        break
       
      // bash
      case 'bash':
        if (theme === "% ") {
          theme = "~$ ";
          console.log('Shell changed: bash')
        } else if (theme === "/Desktop% ") {
          theme = "~/Desktop$ ";
          console.log('Shell changed: bash')
        } else if (theme === "/Downloads% ") {
          theme = "~/Downloads$ ";
          console.log('Shell changed: bash')
        } else if (theme === "/Documents% ") {
          theme = "~/Documents$ ";
          console.log('Shell changed: bash')
        } else if (theme === "/Pictures% ") {
          theme = "~/Pictures$ ";
          console.log('Shell changed: bash')
        } else if (theme === "/Music% ") {
          theme = "~/Music$ ";
          console.log('Shell changed: bash')
        } else if (theme === "/Videos% ") {
          theme = "~/Videos$ ";
          console.log('Shell changed: bash')
        } 
        question()
        break
    /////

    // clear command
      case 'clear':
        console.clear()
        question()
        break
    /////

    // ls command
      case 'ls':
        theme === "~$ " ? console.log('\x1b[34m%s\x1b[0m', "Desktop   Downloads   Documents   Pictures   Music   Videos") : null
        theme === "% " ? console.log('\x1b[34m%s\x1b[0m', "Desktop   Downloads   Documents   Pictures   Music   Videos") : null
        theme === "~/Desktop$ " ?  null : null
        theme === "/Desktop% " ? null : null
        theme === "~/Downloads$ " ? null : null
        theme === "/Downloads% " ? null : null
        theme === "~/Documents$ " ? null : null
        theme === "/Documents% " ? null : null
        theme === "~/Pictures$ " ? null : null
        theme === "/Pictures% " ? null : null
        theme === "~/Music$ " ? null : null
        theme === "/Music% " ? null : null
        theme === "~/Videos$ " ? null : null
        theme === "/Videos% " ? null : null
        question()
        break
    /////

    // shell command (find out which theme || shell you're currently using)
      case 'shell':
        theme === '~$ ' ? console.log('bash') : null
        theme === '% ' ? console.log('zsh') : null
        theme === "~/Desktop$ " ? console.log('bash') : null
        theme === "/Desktop% " ? console.log('zsh') : null
        theme === "~/Downloads$ " ? console.log('bash') : null
        theme === "/Downloads% " ? console.log('zsh') : null
        theme === "~/Documents$ " ? console.log('bash') : null
        theme === "/Documents% " ? console.log('zsh') : null
        theme === "~/Pictures$ " ? console.log('bash') : null
        theme === "/Pictures% " ? console.log('zsh') : null
        theme === "~/Music$ " ? console.log('bash') : null
        theme === "/Music% " ? console.log('zsh') : null
        theme === "~/Videos$ " ? console.log('bash') : null
        theme === "/Videos% " ? console.log('zsh') : null
        question()
        break
    /////

    // cd (change direction) command related // adding "folders" coming soon...
      case 'cd':
        theme === "~/Desktop$ " ? theme = '~$ ' : null
        theme === "/Desktop% " ? theme = '% ' : null
        theme === "~/Downloads$ " ? theme = '~$ ' : null
        theme === "/Downloads% " ? theme = '% ' : null
        theme === "~/Documents$ " ? theme = '~$ ' : null
        theme === "/Documents% " ? theme = '% ' : null
        theme === "~/Pictures$ " ? theme = '~$ ' : null
        theme === "/Pictures% " ? theme = '% ' : null
        theme === "~/Music$ " ? theme = '~$ ' : null
        theme === "/Music% " ? theme = '% ' : null
        theme === "~/Videos$ " ? theme = '~$ ' : null
        theme === "/Videos% " ? theme = '% ' : null
        question()
        break

      case 'cd ..':
        theme === "~/Desktop$ " ? theme = '~$ ' : null
        theme === "/Desktop% " ? theme = '% ' : null
        theme === "~/Downloads$ " ? theme = '~$ ' : null
        theme === "/Downloads% " ? theme = '% ' : null
        theme === "~/Documents$ " ? theme = '~$ ' : null
        theme === "/Documents% " ? theme = '% ' : null
        theme === "~/Pictures$ " ? theme = '~$ ' : null
        theme === "/Pictures% " ? theme = '% ' : null
        theme === "~/Music$ " ? theme = '~$ ' : null
        theme === "/Music% " ? theme = '% ' : null
        theme === "~/Videos$ " ? theme = '~$ ' : null
        theme === "/Videos% " ? theme = '% ' : null
        question()
        break

    // cd [dir]
      case 'cd Desktop':
        theme === "~$ " ? theme = "~/Desktop$ " : null
        theme === "% " ? theme = "/Desktop% " : null
        question()
        break

      case 'cd Downloads':
        theme === "~$ " ? theme = "~/Downloads$ " : null
        theme === "% " ? theme = "/Downloads% " : null
        question()
        break

      case 'cd Documents':
        theme === "~$ " ? theme = "~/Documents$ " : null
        theme === "% " ? theme = "/Documents% " : null
        question()
        break

      case 'cd Pictures':
        theme === "~$ " ? theme = "~/Pictures$ " : null
        theme === "% " ? theme = "/Pictures% " : null
        question()
        break

      case 'cd Music':
        theme === "~$ " ? theme = "~/Music$ " : null
        theme === "% " ? theme = "/Music% " : null
        question()
        break

      case 'cd Videos':
        theme === "~$ " ? theme = "~/Videos$ " : null
        theme === "% " ? theme = "/Videos% " : null
        question()
        break
    /////

    // whereami command
      case 'whereami':
        theme === "~/Desktop$ " ? console.log('Desktop') : null
        theme === "/Desktop% " ? console.log('Desktop') : null
        theme === "~$ " ? console.log("Home") : null
        theme === "% " ? console.log("Home") : null
        theme === "~/Documents$ " ? console.log('Documents') : null
        theme === "/Documents% " ? console.log('Documents') : null
        theme === "~/Downloads$ " ? console.log('Downloads') : null
        theme === "/Downloads% " ? console.log('Downloads') : null
        theme === "~/Pictures$ " ? console.log('Pictures') : null
        theme === "/Pictures% " ? console.log('Pictures') : null
        theme === "~/Music$ " ? console.log('Pictures') : null
        theme === "/Music% " ? console.log('Pictures') : null
        theme === "~/Videos$ " ? console.log('Pictures') : null
        theme === "/Videos% " ? console.log('Pictures') : null
        question()
        break
    /////

    // touch command (not works as aspected, fixes and updates coming soon...)
      case 'touch':
        q = 'Enter file name: '
        rl.question(q, (title) => {
          switch (title) {
            case title:
            title === '' ? console.log('Canceled.') : console.log(`File ${title} created. Source: Trust me bro.`)
            question()
            break
          }
        })
        question()
        break
    /////

    // neofetch command (v0.3)
      case 'neofetch':
        console.log("\n   #####    ##          ##    #####     ########\n ##     ##   ##        ##   ##     ##        ##\n ##     ##    ##      ##    ##     ##       ##\n #########     ##    ##     #########     ##\n ##     ##      ##  ##      ##     ##    ##\n ##     ##       ####       ##     ##   ########\n")
        question()
        break
    /////

    // error (default) command
      default:
        theme === "~$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "% " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/Desktop$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "/Desktop% " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/Documents$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "/Documents% " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/Downloads$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "/Downloads% " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/Pictures$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "/Pictures% " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/Music$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "/Music% " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        theme === "~/Videos$ " ? console.log('\x1b[31m%s\x1b[0m', `bash: command not found: ${text}`) : null
        theme === "/Videos% " ? console.log('\x1b[31m%s\x1b[0m', `zsh: command not found: ${text}`) : null
        question()
        break
    /////
    }
  })
}

console.clear()
console.log(`\x1b[31mDISCLAIMER: This is NOT a real terminal!\x1b[0m\nType \x1b[36mhelp\x1b[0m to view available commands`)
question()