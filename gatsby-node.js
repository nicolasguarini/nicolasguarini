//! 1) CREIAMO LO SLUG DELLA NUOVA PAGINA
const { createFilePath } = require(`gatsby-source-filesystem`) //importo il metodo che crea gli slug

exports.onCreateNode = ({ node, getNode, actions }) => { //viene chiamato ogni volta che viene aggiunto o modificato un nodo
  const { createNodeField } = actions //permette di creare dei campi all'interno dei nodi
  if (node.internal.type === `MarkdownRemark`) { //controlliamo che si tratti di file .md
    const slug = createFilePath({ node, getNode, basePath: `pages` }) //ci salviamo lo slug
    createNodeField({ //chiamiamo il metodo per creare un campo
      node, //gli diciamo il nodo su cui crearlo
      name: `slug`, //gli diciamo il nome del campo
      value: slug, //gli diciamo il valore del campo
    })
  }
}

//! 2) CREIAMO LA PAGINA
exports.createPages = async ({ graphql, actions}) => {
    const { createPage } = actions //permette di creare la pagina

    //ci salviamo il risultato della query in una variabile 'result' (ci viene ritornata una promise)
    const result = await graphql(`
        query {
            allMarkdownRemark{
                edges{
                    node{
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `)
    
    const path = require(`path`)
    result.data.allMarkdownRemark.edges.forEach(({ node }) => { //per ogni nodo andiamo a creare la pagina
        createPage({ //chiamiamo il metodo passandogli un oggetto contenente tutte le info che gli servono
            path: node.fields.slug, //la path (che sarebbe lo slug trovato prima)
            component: path.resolve(`./src/templates/post.js`), //il componente per il templating
            context: {
                //i dati passati nel context sono disponibili nelle queries come variabili GraphQL
                slug: node.fields.slug
            }
        })
    })
}