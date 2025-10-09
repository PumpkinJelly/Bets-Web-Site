from django.http import JsonResponse
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from backend.firebase_config import db
import json


def home(request):
    return HttpResponse("Hello from Django backend!")


class BetsList(APIView):
    def get(self, request):
        bets = []
        docs = db.collection("bets").stream()
        for doc in docs:
            bet = doc.to_dict()
            bet["id"] = doc.id
            bets.append(bet)
        return Response(bets)

    def post(self, request):
        data = request.data
        db.collection("bets").add(data)
        return Response(
            {"message": "Bet added successfully"}, status=status.HTTP_201_CREATED
        )


class BetDetail(APIView):
    def get(self, request, bet_id):
        doc = db.collection("bets").document(bet_id).get()
        if not doc.exists:
            return Response(
                {"error": "Bet not found"}, status=status.HTTP_404_NOT_FOUND
            )
        return Response(doc.to_dict())

    def delete(self, request, bet_id):
        db.collection("bets").document(bet_id).delete()
        return Response(
            {"message": "Bet deleted successfully"}, status=status.HTTP_204_NO_CONTENT
        )


@csrf_exempt
def participate(request):
    if request.method == "POST":
        data = json.loads(request.body)
        name = data.get("name")
        email = data.get("email")
        return JsonResponse({"message": f"{name} участвует, контакт {email}"})
    return JsonResponse({"error": "Только POST"}, status=400)
