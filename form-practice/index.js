const form = document["words"]

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const noun = form.noun.value
    const adverb = form.adverb.value
    const verb = form.verb.value
    form.noun.value = ""
    form.adverb.value = ""
    form.verb.value = ""
    const h1 = document.createElement("h1")
    h1.textContent = noun + " " + adverb + " " + verb
    document.getElementsByTagName("body")[0].append(h1)

})
