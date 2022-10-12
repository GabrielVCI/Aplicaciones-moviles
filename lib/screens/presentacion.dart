import 'package:flutter/material.dart';
import 'package:intl/intl.dart';

final DateTime now = DateTime.now();
final DateFormat formatter = DateFormat('yyyy-MM-dd');
final String formatted = formatter.format(now);

class Presentacion extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        color: Colors.white,
        child: Column(
          children: <Widget>[
            Image.asset('assets/fotopersonal.jpeg'),
            Text(
              "Gabriel Alejandro Valdez Corporan",
              style: Theme.of(context).textTheme.headline1,
            ),
            Text(
              "Matricula: 2020-10173",
              style: Theme.of(context).textTheme.headline2,
            ),
            Text("Fecha actual sin la hora " + formatted)
          ],
        ),
      ),
    );
  }
}
