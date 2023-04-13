function Recommendation() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth >= 2 && currentMonth <= 5

    if (!isSpring) {
        return <div>Ce n'est pas le printemps... Lisez des poèmes quand même!</div>
    }
    return <div>C'est le printemps, lisez des poèmes!</div>

}

export default Recommendation