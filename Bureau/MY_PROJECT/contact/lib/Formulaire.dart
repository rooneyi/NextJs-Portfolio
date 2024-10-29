import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

class Formulaire extends StatelessWidget {
  String nom = '';
  String email = '';
  String password = '';
  String confPassword = '';

  final _formKey = GlobalKey<FormState>();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('Contactez-nous'),
        centerTitle: true,
        backgroundColor: Colors.blueAccent,
      ),
      body: SingleChildScrollView(
          child: Form(
        key: _formKey,
        child: Container(
            padding:
                const EdgeInsets.symmetric(vertical: 50.0, horizontal: 30.0),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: <Widget>[
                const SizedBox(height: 20),
                TextFormField(
                  decoration: const InputDecoration(
                    labelText: 'Email',
                    hintText: 'Entrez votre email',
                    border: OutlineInputBorder(),
                  ),
                  onChanged: (value) => email = value,
                  validator: (value) {
                    if (value == null || value.isEmpty) {
                      return 'Entrez votre email';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 20),
                TextFormField(
                  decoration: InputDecoration(
                    labelText: 'Password',
                    hintText: 'Entrez votre mot de passe',
                    border: OutlineInputBorder(),
                  ),
                  obscureText: true,
                  onChanged: (value) => password = value,
                  validator: (value) {
                    if (value == null || value.length < 6) {
                      return 'Le mot de passe doit comporter au moins 6 caractères';
                    }
                    return null;
                  },
                ),
                const SizedBox(height: 20),
                TextFormField(
                  decoration: const InputDecoration(
                    labelText: 'confirmer votre mot de passe',
                    hintText: 'Password',
                    border: OutlineInputBorder(),
                  ),
                  obscureText: true,
                  onChanged: (value) => confPassword = value,
                  validator: (value) {
                    if (value == null || value.length < 6) {
                      return 'Le mot de passe doit comporter au moins 6 caractères';
                    }
                    return null;
                  },
                ),
                // const SizedBox(height: 20),
                // const TextField(
                //   decoration: InputDecoration(
                //     labelText: 'Message',
                //     hintText: 'Entrez votre message',
                //     border: OutlineInputBorder(),
                //   ),
                //   maxLines: 5,
                // ),
                const SizedBox(height: 20),
                ElevatedButton(
                  onPressed: () {
                    if (_formKey.currentState != null &&
                        _formKey.currentState!.validate()) {
                     Navigator.pushReplacementNamed(context, '/contactList');
                    }
                  },
                  child: const Text('Envoyer'),
                ),
                const SizedBox(height: 20.0),
                CupertinoButton(
                  onPressed: () {
                    Navigator.pushReplacementNamed(context, '/contactList');
                  },
                  color: Colors.blueAccent,
                  child: const Text('Voir les listes ??'),
                )
              ],
            )),
      )),
    );
  }
}
