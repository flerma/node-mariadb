const db = require('../config/db.config.js');
const Customer = db.customers;

exports.create = (req, res) => {
    Customer.create({
        name: req.body.name,
        age: req.body.age
    })
    .then(customer => {
        res.json(customer);
    })
    .catch(err => res.status(400).send(err))
};

exports.findAll = (req, res) => {
    Customer.findAll({
        attributes: { exclude: [ "createAt", "updateAt"] }
    })
    .then(customers => {
        res.json(customers);
    })
    .catch(err => res.status(400).send(err))
};

exports.findById = (req, res) => {
    Customer.findById(req.params.customerId, 
        {attributes: { exclude: [ "createAt", "updateAt"]}}
        )
        .then((customer) => {
            if (!customer) {
                return res.status(404).json("Customer not found");
            }
            return res.status(200).json(customer);
        })
        .catch((err) => res.status(400).send(err));
};

// Update a Customer
exports.update = (req, res) => {
    return Customer.update(req.params.customerId)
        .then(
            customer => {
                if (!customer) {
                    return res.status(404).json({
                        message: 'Customer not found'
                    });
                }
                return customer.update({
                            name: req.body.name,
                            age: req.body.age
                        })
                        .then(() => res.status(200).json(customer))
                        .catch((err) => res.status(400).send(err));
            }
        )
        .catch((err) => res.status(404).send(err));
};

exports.delete = (req, res) => {
    return Customer.findById(req.params.customerId)
        .then((customer) => {
            if (!customer) {
                return res.status(400).json({
                    message: 'Customer Not Found'
                });
            }
            return customer.destroy()
                    .then(() => res.status(200).json({ message: "Destroy sucessfully"}))
                    .catch((err) => res.status(400).send(err));
        })
        .catch((err) => res.status(400).send(err));

};