module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');
        db.get_inventory()
            .then(inventory => res.status(200).send(inventory))
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            })
    },
    createProduct: (req, res) => {
        const db = req.app.get('db');
        let { name, price, img } = req.body
        
        db.create_product(name, price, img)
            .then(() => res.status(200).send())
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            })
    },
    delete: (req, res) => {
        const db = req.app.get('db');
        let { id } = req.params;

        db.delete_product(id)
            .then(() => res.status(200).send())
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            })       
    },
    update: (req, res) => {
        const db = req.app.get('db');
        let { name, price, img } = req.body;
        let { id } = req.params;
        
        db.update_product(id, name, price, img)
            .then(() => res.status(200).send())
            .catch(err => {
                console.log(err);
                res.status(500).send(err);
            })
    }
}