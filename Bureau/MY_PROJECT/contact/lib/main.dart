import 'package:contact/contact_list.dart';
import 'package:flutter/material.dart';

import 'Formulaire.dart';
import 'details_contact.dart';

void main() => runApp(Contact());

class Contact extends StatelessWidget {
  const Contact({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(
        primarySwatch: Colors.blue,

      ),
      debugShowCheckedModeBanner: false,
      initialRoute: '/formulaire',
      routes: {
        '/formulaire': (context) => Formulaire(),
        '/contactList': (context) => ContactList(),
        '/detailsContact': (context) => DetailsContact(),
      },
      home: Formulaire(),
    );
  }
}

