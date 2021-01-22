package reactspr.service;

import java.sql.Date;
import java.util.Calendar;
import java.util.GregorianCalendar;

import com.fasterxml.jackson.databind.ser.std.DateSerializer;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import reactspr.domain.Immobilisation;
import reactspr.repository.ImmobilisationRepository;
@Service
@Transactional
public class ImmobilisationService {


    private final ImmobilisationRepository immobilisationRepository;

    public ImmobilisationService(ImmobilisationRepository immobilisationRepository){
        this.immobilisationRepository = immobilisationRepository;
    }
    @Transactional
    public void operationValidation(Immobilisation immobilisation) {
        if(immobilisation.getImmo()!= null
         || immobilisation.getMarque() != null
          || immobilisation.getCdir() != null
        || immobilisation.getCserv() != null
        ||immobilisation.getLocal() != null
        || immobilisation.getType() != null
        || immobilisation.getDms() != null
        || immobilisation.getDdac() != null
        || immobilisation.getFourn() != null)
        {
            if(//Subvention.dejaDepense + ValAcq * Quantite * tauxSubv > = mntSubvention  )
            {
                
                if(immobilisation.getTaux() != 0)
                {
                    Date dms = immobilisation.getDms();
                    Date datef = immobilisation.getDfact();
                    Calendar calendar = new GregorianCalendar();
                    calendar.setTime(dms);
                    Float taux = immobilisation.getTaux();
                    
                    int an = calendar.get(Calendar.YEAR) + Math.round(1/taux);
                    int mois = calendar.get(Calendar.MONTH) + 1;
                    int jour = calendar.get(Calendar.DAY_OF_MONTH);
                    if(jour == 31)
                    {
                        jour = 30;
                    }
                    if(mois ==1 && jour ==1)
                    {  
                        mois=12;
                        an = an -1;
                        jour = 30;
                    }
                    mois = mois;
                    jour-=1;
                    if(calendar.get(Calendar.DAY_OF_MONTH)==1)
                    {
                        jour = 30;
                        mois-=1;
                        if(mois ==2)
                        {
                            mois=3;
                            jour =0;
                            //datef = SerialDate((an),(mois),jour);
                        }
                    }
                    //datef = SerialDate((an),(mois),jour);
                    for(int i =0; i< immobilisation.get)
                }
            }
        }

    }
}
