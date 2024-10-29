import 'package:flutter/material.dart';

import 'contact_models.dart';

class ContactList extends StatefulWidget {
  const ContactList({super.key});

  @override
  State<ContactList> createState() => _ContactListState();
}

class _ContactListState extends State<ContactList> {

  List<Contact> contacts = <Contact>[
    Contact(name: 'simplice', imgProfile: 'IMG_0126.jpg'),
    Contact(name: 'homel', imgProfile: ''),
    Contact(name: 'arsene', imgProfile: ''),
    Contact(name: 'consolate', imgProfile: ''),
    Contact(name: 'nadal', imgProfile: ''),
    Contact(name: 'marcel', imgProfile: 'IMG_0129.jpg'),
    Contact(name: 'armmi', imgProfile: ''),
    Contact(name: 'dada', imgProfile: 'IMG_0130.jpg'),
    Contact(name: 'gabriel', imgProfile: ''),
    Contact(name: 'sylvie', imgProfile: ''),
    Contact(name: 'dorcey', imgProfile: ''),
    Contact(name: 'ignace', imgProfile: 'IMG_0131.jpg'),
    Contact(name: 'simplice', imgProfile: ''),
    Contact(name: 'rooney', imgProfile: 'rooney.jpeg'),



  ];

  final Color _color = Colors.black;

  Widget _showDialog(BuildContext context,Contact contact) {
    ThemeData localTheme = Theme.of(context);

    return SimpleDialog(
      contentPadding:  EdgeInsets.zero,
      children: <Widget>[
        Image.asset('assets/${contact.imgProfile}'),
        Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: <Widget>[
              Text(contact.name,style: localTheme.textTheme.titleLarge,),
              const SizedBox(height: 10),
              Align(
                alignment: Alignment.center,
                child: Wrap(
                  children: <Widget>[
                      TextButton(
                          onPressed: (){
                            Navigator.pushReplacementNamed(context, '/detailsContact',
                                arguments:{
                                  'nom': contact.name,
                                  'imgProfile': contact.imgProfile,
                                });

                          },
                          child: Text('Details',
                            style: localTheme.textTheme.labelLarge,)),
                      const SizedBox(width: 10),
                      ElevatedButton(
                          onPressed: (){
                            Navigator.of(context).pop();
                          },
                          style: ButtonStyle(
                            backgroundColor: WidgetStateProperty.all<Color>(Colors.red),
                          ),
                          child: Text('Annuler',
                            style: localTheme.textTheme.labelLarge,),
                      ),
                  ]
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Liste des contacts'),
        centerTitle: true,
        backgroundColor: Colors.blueAccent,
        actions: const <Widget>[
          Icon(Icons.search),
          SizedBox(width: 10),
          Icon(Icons.more_vert),
        ],

      ),
      body: ListView.builder(
        itemCount: contacts.length,
        itemBuilder: (BuildContext context, int index) {

          var initialLetter = contacts[index].name[0].toUpperCase();
          if(contacts[index].imgProfile.isNotEmpty ){
            initialLetter = '';

          }
          return Padding(
            padding: const EdgeInsets.symmetric(vertical: 1.0, horizontal: 4.0),
              child:Card(
                child: ListTile(
                  onTap: () => showDialog(
                      context : context,
                      builder: (context)=>_showDialog(context,contacts[index])),
                  title: Text(contacts[index].name,style: Theme.of(context).textTheme.titleLarge,),
                  leading: CircleAvatar(
                    backgroundColor: _color,
                    backgroundImage: AssetImage('assets/${contacts[index].imgProfile}'),
                    child: Text(initialLetter,style: const TextStyle(color: Colors.white),),
                  ),
                ),
              ),
          );
        },
      ),
    );
  }

}
