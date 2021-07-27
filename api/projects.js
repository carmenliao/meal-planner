module.exports = (req, res) => {
    let projectsData = [
        {
            name: 'BNZ',
            html_url: 'http://bnz.co.nz',
            description: `Banks aren't boring`
        }
    ];

    res.json(projectsData);    
}