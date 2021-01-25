package reactspr.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.sql.Date;
import java.time.LocalDate;
import java.time.ZoneId;
import java.util.Calendar;
import java.util.GregorianCalendar;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import reactspr.domain.Immobilisation;
import reactspr.domain.PrepaImmo;
import reactspr.repository.PrepaImmoRepository;
import reactspr.repository.ImmobilisationRepository;
@Service
@Transactional
public class PrepaImmoService {
    private final PrepaImmoRepository prepaImmoRepository ;
    private final Immobilisation immo;
    private final ImmobilisationRepository immobilisationRepository;
    public PrepaImmoService(PrepaImmoRepository prepaImmoRepository,
            ImmobilisationRepository immobilisationRepository, Immobilisation immo) {
		this.prepaImmoRepository = prepaImmoRepository;
        this.immobilisationRepository = immobilisationRepository;
        this.immo = immo;
	}
 
    @Transactional
    public Page<PrepaImmo> getAllManagedPage(Pageable pageable) {
        return prepaImmoRepository.findAll(pageable);
    }
    @Transactional
    public java.util.Date operationValidation(PrepaImmo prepaImmo) {
        if(prepaImmo.getNumero()!= null
         || prepaImmo.getMarque() != null
          || prepaImmo.getCdir() != null
        || prepaImmo.getCserv() != null
        ||prepaImmo.getLocal() != null
        || prepaImmo.getType() != null
        || prepaImmo.getDms() != null
        || prepaImmo.getDdac() != null
        || prepaImmo.getFourn() != null)
        {
            if(//Subvention.dejaDepense + ValAcq * Quantite * tauxSubv > = mntSubvention  )
            {
                
                if(prepaImmo.getTaux() != 0)
                {
                    Date dms = prepaImmo.getDms();
                    //Date datef = prepaImmo.getDfact();

                    Calendar calendar = new GregorianCalendar();
                    calendar.setTime(dms);
                    Float taux = prepaImmo.getTaux();
                    
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
                            LocalDate datef = LocalDate.of( an , mois , jour );
                        }
                    }
                    LocalDate datef = LocalDate.of( an , mois , jour );
                    Date date = java.sql.Date.valueOf(datef);
                    immo.setLibimmo(prepaImmo.getLibimmo());
                    immo.setFourn(prepaImmo.getFourn());
                    immo.setDfact(prepaImmo.getDfact());
                    immo.setValacq(prepaImmo.getValacq());
                    immo.setDdac(prepaImmo.getDdac());
                    immo.setDms(prepaImmo.getDms());
                    immo.setCpteBenef(prepaImmo.getCpteBenef());
                    immo.setCdir(prepaImmo.getCdir());
                    immo.setCserv(prepaImmo.getCserv());
                    immo.setAge(prepaImmo.getAge());
                    immo.setLocal(prepaImmo.getLocal());
                    immo.setCptimmo(prepaImmo.getCptimmo());
                    immo.setCptamort(prepaImmo.getCptamort());
                    immo.setCptdot(prepaImmo.getCptdot());
                    immo.setTaux(prepaImmo.getTaux());
                    immo.setDfs(date);
                    immo.setDatfam(date);
                    immo.setCsfam(prepaImmo.getType());
                    immo.setImmoamort(true);
                    immo.setDatcalc(prepaImmo.getDms());
                    immo.setDuree((float) Math.round(1/taux));
                    immo.setDatcalc(prepaImmo.getDms());
                    immo.setDatcalc(prepaImmo.getDms());
                    immo.setNumBonComm(prepaImmo.getNumBonComm());
                    immo.setDateBonComm(prepaImmo.getDateBonComm());
                    immo.setBonLiv(prepaImmo.getBonLiv());
                    immo.setAnccodif(prepaImmo.getAnccodif());
                    immo.setAncCompte(prepaImmo.getAncCompte());
                    immo.setComptabilise(prepaImmo.getComptabilise());
                    immo.setValrest(prepaImmo.getValacq());
                    immo.setOper(prepaImmo.getOperateurSaisi());
                    immo.setImmoRattache(prepaImmo.getImmoRattache());
                    immo.setNumSubv(prepaImmo.getNumSubv());
                    immo.setBlocnotes(prepaImmo.getBlocnotes());
                    for(int i =0; i< prepaImmo.getNbre();i++)
                    {
                       Immobilisation result = immobilisationRepository.save(immo);
                    }
                    if(prepaImmo.getNumSubv()!=0 && prepaImmo.getNumSubv() >0)
                    {
                        /*
                         rser.Edit
                        rser!dejaDepense = rser!dejaDepense + txtValAcq * cboQuantite * tauxSubv
                        rser.Update
                        Set rserSelect = CurrentDb.OpenRecordset("select * from T_SUBVENTION where numSub = " & result, dbOpenDynaset, dbSeeChanges)
                        cptResulSubVal = rser!cptSubVire
                        cptSubRepVal = rser!cptSubRep
                        For i = 1 To nbreAjout
                        numeroImmo = numImmo + i
                        sqlqub = ("insert into T_SUBIMMO([numSub],[numImmo],[tauxAmort],[montant], [tauxSubv],[dateServiceImmo],[cptResulSub],[cptSubRep]) " _
                        & " values ([numSubv]," & numeroImmo & ",txtTaux,txtValAcq*tauxSubv,tauxSubv,txtDateMis," & cptResulSubVal & "," & cptSubRepVal & ")")
                        Debug.Print sqlqub;
                        DoCmd.RunSQL (sqlqub)
                        Next i
                        */
                    } 
                }
                else
                {
                    immo.setLibimmo(prepaImmo.getLibimmo());
                    immo.setFourn(prepaImmo.getFourn());
                    immo.setNumfact(prepaImmo.getNumfact());
                    immo.setDfact(prepaImmo.getDfact());
                    immo.setValacq(prepaImmo.getValacq());
                    immo.setDdac(prepaImmo.getDdac());
                    immo.setDms(prepaImmo.getDms());
                    immo.setCpteBenef(prepaImmo.getCpteBenef());
                    immo.setCdir(prepaImmo.getCdir());
                    immo.setCserv(prepaImmo.getCserv());
                    immo.setAge(prepaImmo.getAge());
                    immo.setLocal(prepaImmo.getLocal());
                    immo.setCptimmo(prepaImmo.getCptimmo());
                    immo.setCptamort(prepaImmo.getCptamort());
                    immo.setCptdot(prepaImmo.getCptdot());
                    immo.setTaux(prepaImmo.getTaux());
                    immo.setCsfam(prepaImmo.getType());
                    immo.setNumBonComm(prepaImmo.getNumBonComm());
                    immo.setDateBonComm(prepaImmo.getDateBonComm());
                    immo.setBonLiv(prepaImmo.getBonLiv());
                    immo.setAnccodif(prepaImmo.getAnccodif());
                    immo.setAncCompte(prepaImmo.getAncCompte());
                    immo.setComptabilise(prepaImmo.getComptabilise());
                    immo.setValrest(prepaImmo.getValacq());
                    immo.setOper(prepaImmo.getOperateurSaisi());
                    immo.setImmoRattache(prepaImmo.getImmoRattache());
                    immo.setNumSubv(prepaImmo.getNumSubv());
                    immo.setBlocnotes(prepaImmo.getBlocnotes());
                    for(int i =0; i< prepaImmo.getNbre();i++)
                    {
                       Immobilisation result = immobilisationRepository.save(immo);
                    }
                }
            }
            
        }

    }
}
