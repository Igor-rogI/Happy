const Database = require ('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {
    // inserir dados na tabela
    
    await saveOrphanage(db,  {
        lat: "-27.2108626", 
        lng: "-49.6559162",
        name: "Lar dos meninos", 
        about: "Prestamos assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.", 
        whatsapp:"987759637",
        images: [
            "https://images.unsplash.com/photo-1573486145949-182147241fa6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9 ",

            "https://images.unsplash.com/photo-1595207011175-3d72f5a3b21c?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciencia para dar",

        opening_hours: "Horario de visitas das 8h até 18h",
        open_on_weekends: "0"


    })
    

    //consultar dados na tabela
     const selectedOrphanages = await db.all("SELECT * FROM orphanages")
     console.log(selectedOrphanages)

    //consultar somente 1 orfanato, pelo id
    const orphanages = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanages)

    //deletar dado da tabela (especifico)

  // console.log (await db.run('DELETE FROM orphanages WHERE id = "4"'))
   //console.log (await db.run('DELETE FROM orphanages WHERE id = "5"'))

})