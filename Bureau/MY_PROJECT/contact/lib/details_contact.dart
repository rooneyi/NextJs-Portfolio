import 'package:flutter/material.dart';

class DetailsContact extends StatefulWidget {
  const DetailsContact({super.key});

  @override
  State<DetailsContact> createState() => DetailsContactState();
}

class DetailsContactState extends State<DetailsContact> {
  Map data = {};

  @override
  Widget build(BuildContext context) {

    data = ModalRoute.of(context)!.settings.arguments as Map;
    return Scaffold(
      appBar: AppBar(
        actions: const <Widget>[
          Icon(
            Icons.more_vert
          )
        ],
        title: Text('${data['nom']}'),
        centerTitle: true,
      ),
      body: Padding(
        padding: const EdgeInsets.all(20.0),
        child: Column(
            children:<Widget> [
              Image.asset('assets/${data['imgProfile']}'),
              Text('${data['nom']}'),
            ],

        )
      ),
    );
  }
}
