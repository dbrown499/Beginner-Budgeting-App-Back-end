
const checkForCorrectFormat = (req, res, next) => {
    const formatObj =  {
        id: "number", //A unique number for each item
        item_name: "string", // the name of the transaction (ie: income, savings, cat food, etc.)
        amount: "number", // the amount of the transaction
        date: "string", // the date should be a simple string. As a bonus activity, use the date object and date input field and format it to be human-readable
        from: "string", //who this transaction was with (ie. employer, bank, pet store, grocery store, etc)
        category: "string" //what category does this fall into (income, savings, pets, food, etc)
    };
    const obj = req.body;

    for (const key in formatObj) {
        if (!obj.hasOwnProperty(key) || typeof obj[key] !== formatObj[key]) {
            return res.status(404).json({ error: "Object format is not correct" });
        }
    }
    next();
};

module.exports = {checkForCorrectFormat};